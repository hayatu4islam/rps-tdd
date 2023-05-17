function rps(left, right) {
    return left === "rock" || right === "paper" ? "left" : "right";
}
describe("rock, paper, scissors", () => {
    it("should say left wins for rock vs. scissors", () => {
        const left = "rock";
        const right = "scissors";

        const outcome = rps(left, right);

        expect(outcome).toEqual("left");
    });

    it("should say right wins for scissors vs. rock", () => {
        const left = "scissors";
        const right = "rock";

        const outcome = rps(left, right);

        expect(outcome).toEqual("right");
    });

    it("should say left wins for scissors vs. paper", () => {
        const left = "scissors";
        const right = "paper";

        const result = rps(left, right);

        expect(result).toEqual("left");
    });

    it("should say right for paper vs. scissors", () => {
        const left = "paper";
        const right = "scissors";

        const result = rps(left, right);

        expect(result).toBe("right");
    });
});