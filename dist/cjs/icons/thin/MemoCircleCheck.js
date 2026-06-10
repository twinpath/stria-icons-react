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
var MemoCircleCheck_exports = {};
__export(MemoCircleCheck_exports, {
  default: () => MemoCircleCheck_default
});
module.exports = __toCommonJS(MemoCircleCheck_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MemoCircleCheckThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 232C288 227.594 284.406 224 280 224H72C67.594 224 64 227.594 64 232S67.594 240 72 240H280C284.406 240 288 236.406 288 232ZM72 320C67.594 320 64 323.594 64 328S67.594 336 72 336H216C220.406 336 224 332.406 224 328S220.406 320 216 320H72ZM312 496H64C37.49 496 16 474.51 16 448V64C16 37.49 37.49 16 64 16H320C346.51 16 368 37.49 368 64V184C368 188.418 371.582 192 376 192S384 188.418 384 184V64C384 28.652 355.346 0 320 0H64C28.654 0 0 28.652 0 64V448C0 483.346 28.654 512 64 512H312C316.418 512 320 508.418 320 504S316.418 496 312 496ZM320 136C320 131.594 316.406 128 312 128H72C67.594 128 64 131.594 64 136S67.594 144 72 144H312C316.406 144 320 140.406 320 136ZM432.002 224C352.463 224 288 288.463 288 368S352.463 512 432.002 512C511.537 512 576 447.537 576 368S511.537 224 432.002 224ZM432.002 496C361.422 496 304 438.58 304 368S361.422 240 432.002 240C502.58 240 560 297.42 560 368S502.58 496 432.002 496ZM488.562 320.859L411.25 398.172L375.438 362.344C372.344 359.234 367.281 359.203 364.125 362.344C361 365.469 361 370.531 364.125 373.656L405.594 415.141C407.094 416.641 409.125 417.484 411.25 417.484S415.406 416.641 416.906 415.141L499.875 332.172C503 329.047 503 323.984 499.875 320.859S491.688 317.734 488.562 320.859Z" })
  }
));
MemoCircleCheckThin.displayName = "MemoCircleCheckThin";
var MemoCircleCheck_default = MemoCircleCheckThin;
