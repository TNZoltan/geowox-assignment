import { fetchProperties } from "./index"

describe("Backend API", () => {
  it("returns object with coordinates", () => {
    const properties = fetchProperties()
    const allHasCoords = properties.every(p => {
      return p.lat && p.lon
    })
    expect(allHasCoords).toBe.true
  })
})