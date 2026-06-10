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
var SquarePhoneHangup_exports = {};
__export(SquarePhoneHangup_exports, {
  default: () => SquarePhoneHangup_default
});
module.exports = __toCommonJS(SquarePhoneHangup_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquarePhoneHangupDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 96V416C0 451.348 28.654 480 64 480H384C419.346 480 448 451.348 448 416V96C448 60.654 419.346 32 384 32H64C28.654 32 0 60.654 0 96ZM385.744 258.89C390.931 264.077 391.838 272.033 387.955 278.226L360.543 322.078C356.577 328.431 348.539 331.11 341.501 328.315L286.705 306.399C280.23 303.835 276.236 297.212 276.976 290.328L280.429 255.73C243.925 243.267 204.122 243.262 167.634 255.719L171.075 290.341C171.771 297.246 167.81 303.803 161.369 306.4L106.535 328.331C99.464 331.093 91.437 328.458 87.448 322.061L60.047 278.219C56.157 272.032 57.063 264.077 62.245 258.895C151.441 169.699 296.56 169.706 385.744 258.89Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M341.857 328.315L287.06 306.399C280.585 303.835 276.591 297.212 277.332 290.328L280.784 255.73C244.28 243.267 204.478 243.262 167.99 255.719L171.43 290.341C172.126 297.246 168.165 303.804 161.724 306.4L106.89 328.332C99.819 331.094 91.792 328.459 87.803 322.062L60.402 278.22C56.512 272.032 57.418 264.077 62.6 258.896C151.797 169.699 296.915 169.706 386.099 258.89C391.287 264.077 392.194 272.033 388.31 278.226L360.899 322.078C356.932 328.431 348.894 331.11 341.857 328.315Z" })
    ]
  }
));
SquarePhoneHangupDuotone.displayName = "SquarePhoneHangupDuotone";
var SquarePhoneHangup_default = SquarePhoneHangupDuotone;
