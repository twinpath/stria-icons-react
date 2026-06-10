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
var Oven_exports = {};
__export(Oven_exports, {
  default: () => Oven_default
});
module.exports = __toCommonJS(Oven_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const OvenSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 480C0 497.625 14.375 512 32 512H416C433.625 512 448 497.625 448 480V192H0V480ZM64 256H384V448H64V256ZM384 0H64C28.625 0 0 28.625 0 64V160H448V64C448 28.625 419.375 0 384 0ZM80 104C66.75 104 56 93.25 56 80S66.75 56 80 56S104 66.75 104 80S93.25 104 80 104ZM176 104C162.75 104 152 93.25 152 80S162.75 56 176 56S200 66.75 200 80S189.25 104 176 104ZM272 104C258.75 104 248 93.25 248 80S258.75 56 272 56S296 66.75 296 80S285.25 104 272 104ZM368 104C354.75 104 344 93.25 344 80S354.75 56 368 56S392 66.75 392 80S381.25 104 368 104ZM336 288H112C103.164 288 96 295.164 96 304S103.164 320 112 320H336C344.838 320 352 312.836 352 304S344.838 288 336 288Z" })
  }
));
OvenSolid.displayName = "OvenSolid";
var Oven_default = OvenSolid;
