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
var Flask_exports = {};
__export(Flask_exports, {
  default: () => Flask_default
});
module.exports = __toCommonJS(Flask_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FlaskThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M436.326 395.062L287.988 163.156V16H311.982C316.387 16 319.98 12.406 319.98 8S316.387 0 311.982 0H136.025C131.62 0 128.027 3.594 128.027 8S131.62 16 136.025 16H160.019V163.156L11.618 395.156C-3.222 419.094 -3.878 448.125 9.837 472.781C23.49 497.344 48.39 512 76.415 512H371.592C399.616 512 424.517 497.312 438.169 472.719C451.885 448.031 451.229 419.031 436.326 395.062ZM176.015 167.844V16H271.992V167.844L369.327 320H78.703L176.015 167.844ZM424.204 464.969C413.394 484.406 393.743 496 371.592 496H76.415C54.264 496 34.613 484.406 23.834 465C12.962 445.5 13.493 422.531 25.177 403.688L68.467 336H379.559L422.798 403.594C434.514 422.469 435.045 445.406 424.204 464.969Z" })
  }
));
FlaskThin.displayName = "FlaskThin";
var Flask_default = FlaskThin;
