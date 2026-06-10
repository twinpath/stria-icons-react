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
var LineHeight_exports = {};
__export(LineHeight_exports, {
  default: () => LineHeight_default
});
module.exports = __toCommonJS(LineHeight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LineHeightLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M164.688 139.312C167.812 142.438 171.906 144 176 144S184.188 142.438 187.312 139.312C193.562 133.062 193.562 122.937 187.312 116.688L107.312 36.688C101.062 30.438 90.937 30.438 84.688 36.688L4.688 116.688C-1.563 122.938 -1.563 133.063 4.688 139.312S21.063 145.562 27.312 139.312L80 86.625V425.375L27.312 372.687C21.062 366.437 10.937 366.437 4.688 372.687S-1.563 389.062 4.688 395.312L84.688 475.312C87.812 478.438 91.906 480 96 480S104.188 478.438 107.312 475.312L187.312 395.312C193.562 389.062 193.562 378.937 187.312 372.688S170.937 366.438 164.688 372.688L112 425.375V86.625L164.688 139.312ZM272 112H560C568.844 112 576 104.844 576 96S568.844 80 560 80H272C263.156 80 256 87.156 256 96S263.156 112 272 112ZM560 240H272C263.156 240 256 247.156 256 256S263.156 272 272 272H560C568.844 272 576 264.844 576 256S568.844 240 560 240ZM560 400H272C263.156 400 256 407.156 256 416S263.156 432 272 432H560C568.844 432 576 424.844 576 416S568.844 400 560 400Z" })
  }
));
LineHeightLight.displayName = "LineHeightLight";
var LineHeight_default = LineHeightLight;
