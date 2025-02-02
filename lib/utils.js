import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const randomProperty = (obj, categoryName) => {
  const keys = Object.keys(obj);
  let Obj = obj[keys[ keys.length * Math.random() << 0]];

  if (Obj.id === categoryName) {
    const currentObj = randomProperty(obj, categoryName);

    return currentObj;
  } else {
    return Obj;
  }
};

export function create(N) {
  let a = [];
  for (let i = 1; i <= N; i++) {
      a.push(i);
  }
  return a;
}