import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit)

function onFormSubmit() {
  let delay = Number(form.delay.value);

  for (let i = 1; i <= form.amount.value; i += 1){
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success (`✅ Fulfilled promise ${position} in ${delay}ms`)
      })
    .catch(({ position, delay }) => {
        Notiflix.Notify.failure (`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += Number(form.step.value);
  }
}

function createPromise(position, delay) {
  const object = { position, delay }
  const promise = new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        res(object)
      } else {
        // Reject
        rej(object)
      }
    }, delay)
  })
  return promise;
  }

  

