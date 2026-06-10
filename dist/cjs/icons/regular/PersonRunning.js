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
var PersonRunning_exports = {};
__export(PersonRunning_exports, {
  default: () => PersonRunning_default
});
module.exports = __toCommonJS(PersonRunning_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonRunningRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M142.125 316.875L122.25 363.125C121 366.125 118.125 368 115 368H40C26.75 368 16 378.75 16 392S26.75 416 40 416H115C137.375 416 157.625 402.75 166.5 382L180 350.5L170.5 344.75C158.625 337.5 149.25 327.875 142.125 316.875ZM288.125 96C314.625 96 336.125 74.5 336.125 48S314.625 0 288.125 0S240.125 21.5 240.125 48S261.625 96 288.125 96ZM408 240.5L359.625 240.375C356.125 240.375 353 238.125 352 234.75L338.125 188.75C328.875 158.625 304.125 135.5 273.25 128.625L195 110.875C169.25 105 142.625 111 121.75 127.125L73.375 164.5C62.875 172.5 61 187.625 69.125 198.125C77.125 208.625 92.375 210.5 102.75 202.375L151.125 165.125C160.625 157.75 172.875 155.125 184.5 157.75L199.375 161L164 248.375C153.75 274 163.375 303 187 317.375L270.75 367.875C273.875 369.75 275.375 373.5 274.375 377L241 481.375C237.375 494.125 244.75 507.5 257.5 511.125C259.75 511.75 262 512 264.125 512C274.625 512 284.25 505.125 287.25 494.625L320.5 390.125C327.5 365.875 317.25 339.875 295.625 326.75L243.75 295.5L285.75 190.75C288.5 194.375 290.75 198.25 292.125 202.75L306.125 248.75C313.25 272.375 334.75 288.375 359.5 288.375L407.875 288.625H408C421.25 288.625 432 277.875 432 264.625C432 251.375 421.375 240.625 408 240.5Z" })
  }
));
PersonRunningRegular.displayName = "PersonRunningRegular";
var PersonRunning_default = PersonRunningRegular;
