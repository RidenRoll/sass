import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { SubscriptionController } from "../subscription.controller";
import { SubscriptionService } from "../subscription.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  cancelledAt: new Date(),
  createdAt: new Date(),
  downgradedAt: new Date(),
  downgradedToPlanId: 42,
  endsAt: new Date(),
  id: "exampleId",
  renewedAt: new Date(),
  renewedSubscriptionId: 42,
  startsAt: new Date(),
  updatedAt: new Date(),
  upgradedAt: new Date(),
  upgradedToPlanId: 42,
};
const CREATE_RESULT = {
  cancelledAt: new Date(),
  createdAt: new Date(),
  downgradedAt: new Date(),
  downgradedToPlanId: 42,
  endsAt: new Date(),
  id: "exampleId",
  renewedAt: new Date(),
  renewedSubscriptionId: 42,
  startsAt: new Date(),
  updatedAt: new Date(),
  upgradedAt: new Date(),
  upgradedToPlanId: 42,
};
const FIND_MANY_RESULT = [
  {
    cancelledAt: new Date(),
    createdAt: new Date(),
    downgradedAt: new Date(),
    downgradedToPlanId: 42,
    endsAt: new Date(),
    id: "exampleId",
    renewedAt: new Date(),
    renewedSubscriptionId: 42,
    startsAt: new Date(),
    updatedAt: new Date(),
    upgradedAt: new Date(),
    upgradedToPlanId: 42,
  },
];
const FIND_ONE_RESULT = {
  cancelledAt: new Date(),
  createdAt: new Date(),
  downgradedAt: new Date(),
  downgradedToPlanId: 42,
  endsAt: new Date(),
  id: "exampleId",
  renewedAt: new Date(),
  renewedSubscriptionId: 42,
  startsAt: new Date(),
  updatedAt: new Date(),
  upgradedAt: new Date(),
  upgradedToPlanId: 42,
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("Subscription", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SubscriptionService,
          useValue: service,
        },
      ],
      controllers: [SubscriptionController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /subscriptions", async () => {
    await request(app.getHttpServer())
      .post("/subscriptions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        cancelledAt: CREATE_RESULT.cancelledAt.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        downgradedAt: CREATE_RESULT.downgradedAt.toISOString(),
        endsAt: CREATE_RESULT.endsAt.toISOString(),
        renewedAt: CREATE_RESULT.renewedAt.toISOString(),
        startsAt: CREATE_RESULT.startsAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        upgradedAt: CREATE_RESULT.upgradedAt.toISOString(),
      });
  });

  test("GET /subscriptions", async () => {
    await request(app.getHttpServer())
      .get("/subscriptions")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          cancelledAt: FIND_MANY_RESULT[0].cancelledAt.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          downgradedAt: FIND_MANY_RESULT[0].downgradedAt.toISOString(),
          endsAt: FIND_MANY_RESULT[0].endsAt.toISOString(),
          renewedAt: FIND_MANY_RESULT[0].renewedAt.toISOString(),
          startsAt: FIND_MANY_RESULT[0].startsAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          upgradedAt: FIND_MANY_RESULT[0].upgradedAt.toISOString(),
        },
      ]);
  });

  test("GET /subscriptions/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/subscriptions"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /subscriptions/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/subscriptions"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        cancelledAt: FIND_ONE_RESULT.cancelledAt.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        downgradedAt: FIND_ONE_RESULT.downgradedAt.toISOString(),
        endsAt: FIND_ONE_RESULT.endsAt.toISOString(),
        renewedAt: FIND_ONE_RESULT.renewedAt.toISOString(),
        startsAt: FIND_ONE_RESULT.startsAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        upgradedAt: FIND_ONE_RESULT.upgradedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
