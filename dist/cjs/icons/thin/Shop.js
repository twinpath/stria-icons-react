var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Shop_exports = {};
__export(Shop_exports, {
  default: () => Shop_default
});
module.exports = __toCommonJS(Shop_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShopThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M634.603 142.25L549.226 14.25C543.226 5.25 533.226 0 522.601 0H117.345C106.72 0 96.72 5.25 90.72 14.25L5.47 142.25C-8.78 163.5 6.47 192 32.095 192H63.999V464C63.999 490.51 85.489 512 111.999 512H336.009C362.513 512 383.999 490.514 383.999 464.01V231.998C383.999 227.58 380.419 224 376.001 224S368.001 227.58 368.001 231.998V464C368.001 481.672 353.675 496 336.001 496H111.987C94.319 496 79.995 481.676 79.995 464.008V192H559.999V488C559.999 492.406 556.405 496 551.999 496H519.999C515.593 496 511.999 492.406 511.999 488V232C511.999 227.594 508.421 224 503.999 224S495.999 227.594 495.999 232V488C495.999 501.219 506.765 512 519.999 512H551.999C565.233 512 575.999 501.219 575.999 488V192H607.978C633.478 192 648.728 163.5 634.603 142.25ZM622.036 167.555C620.675 170.094 616.581 176 607.978 176H32.095C23.386 176 19.284 170.072 17.925 167.523C16.573 164.992 13.95 158.328 18.786 151.119L104.034 23.125C107.007 18.664 111.983 16 117.345 16H522.601C527.962 16 532.939 18.664 535.915 23.127L621.278 151.105C626.062 158.305 623.401 165.008 622.036 167.555ZM135.982 224C131.577 224 127.983 227.578 127.983 232V376C127.983 380.422 131.577 384 135.982 384H312.015C316.419 384 320.013 380.422 320.013 376V232C320.013 227.578 316.419 224 312.015 224C307.608 224 304.017 227.578 304.017 232V368H143.98V232C143.98 227.578 140.388 224 135.982 224Z" })
  }
));
ShopThin.displayName = "ShopThin";
var Shop_default = ShopThin;
