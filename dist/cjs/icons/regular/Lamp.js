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
var Lamp_exports = {};
__export(Lamp_exports, {
  default: () => Lamp_default
});
module.exports = __toCommonJS(Lamp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LampRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M445.486 237.75L367.983 21.75C363.233 8.625 352.357 0 340.357 0H120.598C109.223 0 98.722 7.75 93.597 19.875L3.218 235.875C-6.782 259.75 7.719 288 30.219 288H119.348C94.722 323.125 79.971 366.5 79.971 401.625C79.971 434.25 92.722 465.75 115.973 490.25C128.973 504.125 147.724 512 167.475 512H280.479C300.23 512 318.981 504.125 331.981 490.25C355.232 465.75 367.983 434.25 367.983 401.625C367.983 366.5 353.232 323.125 328.606 288H417.735C439.486 288 454.111 261.625 445.486 237.75ZM319.981 401.625C319.981 422.875 311.231 442.25 297.105 457.25C292.73 461.75 286.73 464 280.479 464H167.475C161.225 464 155.099 461.75 150.849 457.25C136.724 442.25 127.973 422.875 127.973 401.625C127.973 366.875 150.724 314.25 183.601 288H264.229C297.23 314.25 319.981 366.875 319.981 401.625ZM53.47 240L133.849 48H326.481L395.359 240H53.47Z" })
  }
));
LampRegular.displayName = "LampRegular";
var Lamp_default = LampRegular;
