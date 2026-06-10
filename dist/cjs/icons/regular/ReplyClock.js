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
var ReplyClock_exports = {};
__export(ReplyClock_exports, {
  default: () => ReplyClock_default
});
module.exports = __toCommonJS(ReplyClock_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ReplyClockRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 0C416.471 0 352 64.469 352 144S416.471 288 496 288S640 223.531 640 144S575.529 0 496 0ZM544 160H496C487.156 160 480 152.844 480 144V80C480 71.156 487.156 64 496 64S512 71.156 512 80V128H544C552.844 128 560 135.156 560 144S552.844 160 544 160ZM256 256H88.506L215.688 146.156C225.719 137.5 226.812 122.344 218.156 112.312C209.469 102.25 194.312 101.156 184.312 109.844L8.312 261.844C3.031 266.406 0 273.031 0 280S3.031 293.594 8.312 298.156L184.312 450.156C188.844 454.094 194.438 456 200 456C206.719 456 213.406 453.188 218.156 447.688C226.812 437.656 225.719 422.5 215.688 413.844L88.506 304H256C357.469 304 440 386.531 440 488C440 501.25 450.75 512 464 512S488 501.25 488 488C488 360.062 383.938 256 256 256Z" })
  }
));
ReplyClockRegular.displayName = "ReplyClockRegular";
var ReplyClock_default = ReplyClockRegular;
