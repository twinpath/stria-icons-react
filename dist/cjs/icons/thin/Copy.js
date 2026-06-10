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
var Copy_exports = {};
__export(Copy_exports, {
  default: () => Copy_default
});
module.exports = __toCommonJS(Copy_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CopyThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M502.629 102.625L409.371 9.375C403.371 3.371 395.23 0 386.746 0H272C245.492 0 224 21.492 224 48V336C224 362.508 245.492 384 272 384H464C490.508 384 512 362.508 512 336V125.254C512 116.766 508.629 108.629 502.629 102.625ZM400 22.629L489.375 112H424C410.781 112 400 101.234 400 88V22.629ZM496 336C496 353.645 481.645 368 464 368H272C254.355 368 240 353.645 240 336V48C240 30.355 254.355 16 272 16H384V88C384 110.062 401.938 128 424 128H496V336ZM280 448C275.582 448 272 451.582 272 456V464C272 481.672 257.674 496 240 496H48C30.328 496 16 481.672 16 464V176C16 158.328 30.328 144 48 144H152C156.418 144 160 140.418 160 136S156.418 128 152 128H48C21.49 128 0 149.492 0 176V464C0 490.508 21.49 512 48 512H240C266.51 512 288 490.508 288 464V456C288 451.582 284.418 448 280 448Z" })
  }
));
CopyThin.displayName = "CopyThin";
var Copy_default = CopyThin;
