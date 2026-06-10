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
var Repeat_exports = {};
__export(Repeat_exports, {
  default: () => Repeat_default
});
module.exports = __toCommonJS(Repeat_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RepeatRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 128H319.99V184C319.99 193.703 325.836 202.453 334.807 206.172S354.09 207.828 360.967 200.969L440.98 120.969C450.354 111.598 450.354 96.402 440.98 87.031L360.967 7.031C354.09 0.172 343.777 -1.891 334.807 1.828S319.99 14.297 319.99 24V80H176C78.953 80 0 158.969 0 256C0 269.25 10.75 280 24 280S48 269.25 48 256C48 185.406 105.422 128 176 128ZM488 232C474.75 232 464 242.75 464 256C464 326.594 406.578 384 336 384H192.01V328C192.01 318.297 186.164 309.547 177.193 305.828S157.91 304.172 151.033 311.031L71.02 391.031C61.646 400.402 61.646 415.598 71.02 424.969L151.033 504.969C157.91 511.828 168.223 513.891 177.193 510.172S192.01 497.703 192.01 488V432H336C433.047 432 512 353.031 512 256C512 242.75 501.25 232 488 232Z" })
  }
));
RepeatRegular.displayName = "RepeatRegular";
var Repeat_default = RepeatRegular;
