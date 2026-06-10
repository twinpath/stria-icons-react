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
var BoxCircleCheck_exports = {};
__export(BoxCircleCheck_exports, {
  default: () => BoxCircleCheck_default
});
module.exports = __toCommonJS(BoxCircleCheck_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BoxCircleCheckThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432.002 224C352.463 224 288 288.463 288 368S352.463 512 432.002 512C511.537 512 576 447.537 576 368S511.537 224 432.002 224ZM432.002 496C361.422 496 304 438.58 304 368S361.422 240 432.002 240C502.58 240 560 297.42 560 368S502.58 496 432.002 496ZM488.562 320.859L411.25 398.172L375.438 362.344C372.344 359.234 367.281 359.203 364.125 362.344C361 365.469 361 370.531 364.125 373.656L405.594 415.141C407.094 416.641 409.125 417.484 411.25 417.484S415.406 416.641 416.906 415.141L499.875 332.172C503 329.047 503 323.984 499.875 320.859S491.688 317.734 488.562 320.859ZM280 464H32C23.164 464 16 456.836 16 448V176H432V184C432 188.418 435.582 192 440 192S448 188.418 448 184V175.107C448 165.17 445.686 155.369 441.242 146.482L392.844 49.688C387.422 38.848 376.342 32 364.223 32H83.777C71.658 32 60.578 38.848 55.156 49.688L6.756 146.486C2.312 155.371 0 165.168 0 175.104V448C0 465.672 14.326 480 32 480H280C284.418 480 288 476.418 288 472S284.418 464 280 464ZM232 48H364.223C370.322 48 375.805 51.389 378.533 56.844L426.934 153.641C427.943 155.66 428.52 157.857 429.234 160H232V48ZM21.066 153.643L69.467 56.844C72.195 51.389 77.678 48 83.777 48H216V160H18.768C19.48 157.857 20.057 155.662 21.066 153.643Z" })
  }
));
BoxCircleCheckThin.displayName = "BoxCircleCheckThin";
var BoxCircleCheck_default = BoxCircleCheckThin;
