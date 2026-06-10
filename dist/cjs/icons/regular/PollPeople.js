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
var PollPeople_exports = {};
__export(PollPeople_exports, {
  default: () => PollPeople_default
});
module.exports = __toCommonJS(PollPeople_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PollPeopleRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M616 32H248C234.75 32 224 42.75 224 56V168C224 181.25 234.75 192 248 192H616C629.25 192 640 181.25 640 168V56C640 42.75 629.25 32 616 32ZM592 144H512V80H592V144ZM616 320H248C234.75 320 224 330.75 224 344V456C224 469.25 234.75 480 248 480H616C629.25 480 640 469.25 640 456V344C640 330.75 629.25 320 616 320ZM592 432H352V368H592V432ZM168 200C168 213.25 157.25 224 144 224S120 213.25 120 200C120 186.781 109.219 176 96 176H72C58.781 176 48 186.781 48 200C48 213.25 37.25 224 24 224S0 213.25 0 200C0 160.312 32.312 128 72 128H96C135.688 128 168 160.312 168 200ZM168 488C168 501.25 157.25 512 144 512S120 501.25 120 488C120 474.781 109.219 464 96 464H72C58.781 464 48 474.781 48 488C48 501.25 37.25 512 24 512S0 501.25 0 488C0 448.312 32.312 416 72 416H96C135.688 416 168 448.312 168 488ZM32 48C32 21.49 53.49 0 80 0S128 21.49 128 48S106.51 96 80 96S32 74.51 32 48ZM80 384C53.49 384 32 362.51 32 336S53.49 288 80 288S128 309.49 128 336S106.51 384 80 384Z" })
  }
));
PollPeopleRegular.displayName = "PollPeopleRegular";
var PollPeople_default = PollPeopleRegular;
