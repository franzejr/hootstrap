//= require ./utils/dynamicListener
//= require ./utils/turbolinks

document.addEventListener(HootstrapEvent, () => {
  let confirmed = false;

  addDynamicEventListener(document.body, 'click', '[data-prompt]', handleClick);

  function handleClick(event) {
    if (confirmed) {
      confirmed = false;
      return;
    }

    Rails.stopEverything(event);

    const target = event.target;

    new Toast({
      message: target.getAttribute('data-prompt'),
      type: 'danger',
      action: 'OK',
      onClick: () => {
        confirmed = true;
        target.click();
      }
    });
  }
});