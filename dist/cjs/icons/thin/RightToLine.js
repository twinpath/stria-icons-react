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
var RightToLine_exports = {};
__export(RightToLine_exports, {
  default: () => RightToLine_default
});
module.exports = __toCommonJS(RightToLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RightToLineThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M431.932 72V440C431.932 444.418 435.514 448 439.932 448S447.932 444.418 447.932 440V72C447.932 67.582 444.35 64 439.932 64S431.932 67.582 431.932 72ZM160.113 120V192H32.023C14.336 192 0 206.328 0 224V288C0 305.674 14.336 320 32.023 320H160.113V392C160.113 401.578 165.822 410.25 174.625 414.047C183.428 417.828 193.654 416.031 200.627 409.453L344.73 273.453C349.531 268.922 351.932 262.461 351.932 256S349.531 243.078 344.73 238.547L200.627 102.547C193.654 95.969 183.428 94.172 174.625 97.953C165.822 101.75 160.113 110.422 160.113 120ZM189.645 114.184L333.748 250.182C335.115 251.473 335.932 253.648 335.932 256S335.115 260.527 333.748 261.816L189.646 397.814C187.314 400.016 183.896 400.615 180.961 399.355C178.016 398.084 176.113 395.197 176.113 392V304H32.023C23.188 304 16 296.822 16 288V224C16 215.178 23.188 208 32.023 208H176.113V120C176.113 116.803 178.016 113.916 180.939 112.654C183.896 111.385 187.314 111.984 189.645 114.184Z" })
  }
));
RightToLineThin.displayName = "RightToLineThin";
var RightToLine_default = RightToLineThin;
