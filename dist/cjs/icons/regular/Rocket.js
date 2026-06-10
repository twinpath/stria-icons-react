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
var Rocket_exports = {};
__export(Rocket_exports, {
  default: () => Rocket_default
});
module.exports = __toCommonJS(Rocket_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RocketRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368 104C345.875 104 328 121.875 328 144S345.875 184 368 184S408 166.125 408 144S389.999 104 368 104ZM505.125 19.375C503.875 13.75 498.375 8.25 492.75 7C460.125 0 434.625 0 409.125 0C305.375 0 243 55.125 196.25 128H94.875C78.5 128 59.25 139.875 52 154.5L2.5 253.25C1 256.625 0.125 260.25 0 264C0 277.25 10.75 288 24 288H116.625L105.999 309.375C96.75 328.375 110.375 344.125 112.25 346L165.999 399.75C181.5 415.25 199.75 407.25 202.625 405.875L224 395.375V488C224 501.25 234.75 512 248 512C251.625 511.875 255.25 511 258.625 509.5L357.375 460.125C372 452.75 383.875 433.625 383.875 417.25V315.75C456.625 268.875 512 206.25 512 103C512.125 77.5 512.125 52 505.125 19.375ZM358.5 275C321.625 293.5 237.375 335.125 191.75 357.75L154.25 320.25C176.875 274.5 218.5 190.25 237 153.375C284.375 79.5 336 48 409.125 48C427.125 48 443.5 48 461.75 50.375C464.125 69 464 85.625 464 103C464 175.75 432.375 227.25 358.5 275Z" })
  }
));
RocketRegular.displayName = "RocketRegular";
var Rocket_default = RocketRegular;
