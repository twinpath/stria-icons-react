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
var SquareUpRight_exports = {};
__export(SquareUpRight_exports, {
  default: () => SquareUpRight_default
});
module.exports = __toCommonJS(SquareUpRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareUpRightLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM384 64C401.645 64 416 78.355 416 96V416C416 433.645 401.645 448 384 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H384ZM163.951 144.796C147.787 144.874 133.347 154.541 127.148 169.49C120.939 184.494 124.342 201.597 135.833 213.087L156.118 233.373L105.206 284.284C89.606 299.885 89.606 325.252 105.206 340.853L139.147 374.794C154.748 390.394 180.115 390.394 195.716 374.794L246.627 323.882L266.913 344.167C278.403 355.658 295.506 359.061 310.51 352.852C325.492 346.62 335.181 332.113 335.193 315.883L337.524 182.737C337.546 160.795 318.929 142.465 297.539 142.465L163.951 144.796ZM164.117 176.804L164.393 176.793L297.815 174.451C300.068 174.451 305.569 176.545 305.538 182.461L303.207 315.607C303.189 323.808 294.075 326.075 289.54 321.54L246.627 278.627L173.088 352.167C169.973 355.282 164.89 355.282 161.775 352.167L127.833 318.225C124.718 315.11 124.718 310.027 127.833 306.912L201.373 233.373L158.46 190.46C153.204 185.204 157.257 176.804 164.117 176.804Z" })
  }
));
SquareUpRightLight.displayName = "SquareUpRightLight";
var SquareUpRight_default = SquareUpRightLight;
