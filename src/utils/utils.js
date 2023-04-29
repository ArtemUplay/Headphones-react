export function fakeApi(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

export const loadPage = async (setter) => {
  try {
    setter(true);

    await fakeApi(1000);
  } catch (error) {
    console.log(error);
  } finally {
    setter(false);
  }
};
