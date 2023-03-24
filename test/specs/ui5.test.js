it("should have button without text", async () => {
  const button = await browser.asControl({
    selector: {
      id: "button",
      viewName: "sap.ui.demo.basicTemplate.view.Home",
    },
  });
  const buttonText = await button.getText();
  expect(buttonText).toEqual("");
});

it("should find the nested buttons", async () => {
    const selector = {
        selector: {
            controlType: "sap.m.Button"
        }
    }
    const buttons = await browser.allControls(selector)
    expect(buttons)
})