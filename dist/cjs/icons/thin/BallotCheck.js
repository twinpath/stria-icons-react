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
var BallotCheck_exports = {};
__export(BallotCheck_exports, {
  default: () => BallotCheck_default
});
module.exports = __toCommonJS(BallotCheck_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BallotCheckThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 0H64C28.656 0 0 28.656 0 64V448C0 483.344 28.656 512 64 512H384C419.344 512 448 483.344 448 448V64C448 28.656 419.344 0 384 0ZM432 448C432 474.469 410.469 496 384 496H64C37.531 496 16 474.469 16 448V64C16 37.531 37.531 16 64 16H384C410.469 16 432 37.531 432 64V448ZM376 120H200C195.594 120 192 123.578 192 128S195.594 136 200 136H376C380.406 136 384 132.422 384 128S380.406 120 376 120ZM376 248H200C195.594 248 192 251.578 192 256S195.594 264 200 264H376C380.406 264 384 260.422 384 256S380.406 248 376 248ZM376 376H200C195.594 376 192 379.578 192 384S195.594 392 200 392H376C380.406 392 384 388.422 384 384S380.406 376 376 376ZM88 168H104C121.672 168 136 153.674 136 136V120C136 102.326 121.672 88 104 88H88C70.328 88 56 102.326 56 120V136C56 153.674 70.328 168 88 168ZM72 120C72 111.178 79.176 104 88 104H104C112.824 104 120 111.178 120 120V136C120 144.822 112.824 152 104 152H88C79.176 152 72 144.822 72 136V120ZM104 344H88C70.328 344 56 358.326 56 376V392C56 409.674 70.328 424 88 424H104C121.672 424 136 409.674 136 392V376C136 358.326 121.672 344 104 344ZM120 392C120 400.822 112.824 408 104 408H88C79.176 408 72 400.822 72 392V376C72 367.178 79.176 360 88 360H104C112.824 360 120 367.178 120 376V392ZM154.344 210.344L96 268.688L69.656 242.344C66.531 239.219 61.469 239.219 58.344 242.344S55.219 250.531 58.344 253.656L90.344 285.656C91.906 287.219 93.938 288 96 288S100.094 287.219 101.656 285.656L165.656 221.656C168.781 218.531 168.781 213.469 165.656 210.344S157.469 207.219 154.344 210.344Z" })
  }
));
BallotCheckThin.displayName = "BallotCheckThin";
var BallotCheck_default = BallotCheckThin;
