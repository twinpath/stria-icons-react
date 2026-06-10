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
var Bus_exports = {};
__export(Bus_exports, {
  default: () => Bus_default
});
module.exports = __toCommonJS(Bus_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BusRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M520 128H512V80C512 35.25 412.75 0 288 0S64 35.25 64 80V128H56C42.75 128 32 138.75 32 152V232C32 245.25 42.75 256 56 256H64V416C64 433.625 78.375 448 96 448V480C96 497.625 110.375 512 128 512S160 497.625 160 480V448H416V480C416 497.625 430.375 512 448 512S480 497.625 480 480V448C497.625 448 512 433.625 512 416V256H520C533.25 256 544 245.25 544 232V152C544 138.75 533.25 128 520 128ZM112 160H264V224H112V160ZM464 400H112V272H464V400ZM464 224H312V160H464V224ZM464 112H368C368 94.375 353.625 80 336 80H240C222.375 80 208 94.375 208 112H112V85.375C126.125 71.625 188.75 48 288 48S449.875 71.625 464 85.375V112ZM176 368C193.625 368 208 353.625 208 336S193.625 304 176 304S144 318.375 144 336S158.375 368 176 368ZM400 368C417.625 368 432 353.625 432 336S417.625 304 400 304S368 318.375 368 336S382.375 368 400 368Z" })
  }
));
BusRegular.displayName = "BusRegular";
var Bus_default = BusRegular;
