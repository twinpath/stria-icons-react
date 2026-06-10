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
var BackwardStep_exports = {};
__export(BackwardStep_exports, {
  default: () => BackwardStep_default
});
module.exports = __toCommonJS(BackwardStep_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BackwardStepRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 88V424C32 437.254 42.746 448 56 448S80 437.254 80 424V318.17L253.406 442.031C258.938 446 265.438 448 272 448C277 448 282.031 446.844 286.656 444.469C297.312 438.969 304 428 304 416V96C304 84 297.312 73.031 286.656 67.531C282.037 65.174 277.008 64.002 271.996 64.002C265.447 64.004 258.93 66.004 253.406 69.969L80 193.83V88C80 74.746 69.254 64 56 64S32 74.746 32 88ZM80 252.816L107.9 232.889L256 127.104V384.896L107.898 279.111L80 259.182V252.816Z" })
  }
));
BackwardStepRegular.displayName = "BackwardStepRegular";
var BackwardStep_default = BackwardStepRegular;
