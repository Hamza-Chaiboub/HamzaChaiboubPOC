const request = require("supertest");
const app = require("../server/app");

describe("Food API", () => {
  // check the status code / item count / structure of each food
  test("GET /foods returns five food items", async () => {
    const response = await request(app).get("/foods");
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body).toHaveLength(5);

    response.body.forEach((food) => {
      expect(food).toEqual({
        id: expect.any(Number),
        name: expect.any(String),
        price: expect.any(Number)
      });

      expect(food.name.trim().length).toBeGreaterThan(0);
      expect(food.price).toBeGreaterThanOrEqual(0);
    });
  });

  // check that an unknown route returns the expected JSON error
  test("GET /missing returns 404", async () => {
    const response = await request(app).get("/missing");
    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      error: "Route not found"
    });
  });
});