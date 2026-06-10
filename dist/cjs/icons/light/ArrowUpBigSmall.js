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
var ArrowUpBigSmall_exports = {};
__export(ArrowUpBigSmall_exports, {
  default: () => ArrowUpBigSmall_default
});
module.exports = __toCommonJS(ArrowUpBigSmall_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpBigSmallLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M399.998 320H336C309.6 320 288 341.602 288 368V432C288 458.398 309.6 480 336 480H399.998C426.398 480 447.998 458.398 447.998 432V368C447.998 341.602 426.398 320 399.998 320ZM415.998 432C415.998 440.672 408.672 448 399.998 448H336C327.328 448 320 440.672 320 432V368C320 359.328 327.328 352 336 352H399.998C408.672 352 415.998 359.328 415.998 368V432ZM464 32H336C309.49 32 288 53.492 288 80V208C288 234.508 309.49 256 336 256H464C490.51 256 512 234.508 512 208V80C512 53.492 490.51 32 464 32ZM480 208C480 216.824 472.822 224 464 224H336C327.178 224 320 216.824 320 208V80C320 71.176 327.178 64 336 64H464C472.822 64 480 71.176 480 80V208ZM139.312 36.688C133.062 30.438 122.937 30.438 116.688 36.688L20.688 132.688C14.438 138.938 14.438 149.063 20.688 155.312S37.063 161.562 43.312 155.312L112 86.625V464C112 472.844 119.156 480 128 480S144 472.844 144 464V86.625L212.688 155.312C215.812 158.438 219.906 160 224 160S232.188 158.438 235.312 155.312C241.562 149.062 241.562 138.937 235.312 132.688L139.312 36.688Z" })
  }
));
ArrowUpBigSmallLight.displayName = "ArrowUpBigSmallLight";
var ArrowUpBigSmall_default = ArrowUpBigSmallLight;
