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
var KiwiBird_exports = {};
__export(KiwiBird_exports, {
  default: () => KiwiBird_default
});
module.exports = __toCommonJS(KiwiBird_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const KiwiBirdRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M575.875 218C572.625 157.375 518.25 112 457.625 112L451.045 112C398.28 112 345.687 97.905 302.707 67.298C271.546 45.108 233.346 32 192 32C80.375 32 0 121.875 0 224C0 295 38.625 356.75 96 390V456C96 469.255 106.745 480 120 480H120C133.255 480 144 469.255 144 456V409.75C159.375 413.75 175.375 416 192 416C197.375 416 202.625 415.25 208 414.875V456C208 469.255 218.745 480 232 480H232C245.255 480 256 469.255 256 456V404.5C271.35 399.114 285.976 392.132 299.25 383.086C343.385 353.011 395.092 336 448.5 336L464 336C466.625 336 469 335.375 471.5 335.25L545.999 471.625C548.75 476.875 554.25 480 560 480C568.375 480 576 473.25 576 464C576 208 576 222.25 575.875 218ZM464 288H448.5C388 288 328 307.125 270.125 344.875C246.875 360 219.875 368 192 368C114.25 368 47.75 305.125 48 224C48.125 140.25 114.625 80 192 80C221.25 80 249.25 88.75 273.25 105.25C325.25 141.125 385.75 160 448.25 160H457.625C494.625 160 526.125 187.125 527.875 220.5C529.875 257.75 500.25 288 464 288ZM464 200C450.75 200 440 210.75 440 224S450.75 248 464 248S488 237.25 488 224S477.25 200 464 200Z" })
  }
));
KiwiBirdRegular.displayName = "KiwiBirdRegular";
var KiwiBird_default = KiwiBirdRegular;
