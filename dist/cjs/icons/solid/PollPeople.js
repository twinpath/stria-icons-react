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
const PollPeopleSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M80 96C106.5 96 128 74.5 128 48S106.5 0 80 0S32 21.5 32 48S53.5 96 80 96ZM128 336C128 309.5 106.5 288 80 288S32 309.5 32 336S53.5 384 80 384S128 362.5 128 336ZM96 416H64C28.75 416 0 444.75 0 480V496C0 504.75 7.25 512 16 512H144C152.75 512 160 504.75 160 496V480C160 444.75 131.25 416 96 416ZM616 32H248C234.75 32 224 42.75 224 56V168C224 181.25 234.75 192 248 192H616C629.25 192 640 181.25 640 168V56C640 42.75 629.25 32 616 32ZM576 128H512V96H576V128ZM96 128H64C28.75 128 0 156.75 0 192V208C0 216.75 7.25 224 16 224H144C152.75 224 160 216.75 160 208V192C160 156.75 131.25 128 96 128ZM616 320H248C234.75 320 224 330.75 224 344V456C224 469.25 234.75 480 248 480H616C629.25 480 640 469.25 640 456V344C640 330.75 629.25 320 616 320ZM576 416H352V384H576V416Z" })
  }
));
PollPeopleSolid.displayName = "PollPeopleSolid";
var PollPeople_default = PollPeopleSolid;
