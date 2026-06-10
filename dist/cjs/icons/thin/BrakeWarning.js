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
var BrakeWarning_exports = {};
__export(BrakeWarning_exports, {
  default: () => BrakeWarning_default
});
module.exports = __toCommonJS(BrakeWarning_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BrakeWarningThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320.02 320C324.426 320 328.02 316.406 328.02 312V136C328.02 131.594 324.426 128 320.02 128S312.02 131.594 312.02 136V312C312.02 316.406 315.613 320 320.02 320ZM320.082 352C311.258 352 304.082 359.178 304.082 368S311.258 384 320.082 384S336.082 376.822 336.082 368S328.906 352 320.082 352ZM320 32C196.285 32 96 132.342 96 256C96 379.742 196.285 480 320 480S544 379.742 544 256C544 132.342 443.715 32 320 32ZM320 464C205.309 464 112 370.691 112 256S205.309 48 320 48S528 141.309 528 256S434.691 464 320 464ZM79 57.688C75.5 55 70.469 55.594 67.75 59.062C23.438 115.75 0 183.844 0 256S23.438 396.25 67.75 452.938C69.344 454.938 71.688 456 74.062 456C75.781 456 77.531 455.438 79 454.312C82.469 451.594 83.094 446.562 80.375 443.062C38.25 389.25 16 324.562 16 256S38.25 122.75 80.375 68.938C83.094 65.438 82.469 60.406 79 57.688ZM572.25 59.062C569.5 55.594 564.469 55 561 57.688C557.531 60.406 556.906 65.438 559.625 68.938C601.75 122.75 624 187.438 624 256S601.75 389.25 559.625 443.062C556.906 446.562 557.531 451.594 561 454.312C562.469 455.438 564.219 456 565.938 456C568.313 456 570.656 454.938 572.25 452.938C616.562 396.25 640 328.156 640 256S616.562 115.75 572.25 59.062Z" })
  }
));
BrakeWarningThin.displayName = "BrakeWarningThin";
var BrakeWarning_default = BrakeWarningThin;
