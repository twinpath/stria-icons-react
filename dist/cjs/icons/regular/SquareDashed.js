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
var SquareDashed_exports = {};
__export(SquareDashed_exports, {
  default: () => SquareDashed_default
});
module.exports = __toCommonJS(SquareDashed_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareDashedRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M104 32H96C42.98 32 0 74.98 0 128V136C0 149.254 10.746 160 24 160S48 149.254 48 136V128C48 101.49 69.49 80 96 80H104C117.254 80 128 69.254 128 56C128 42.744 117.254 32 104 32ZM24 320C37.254 320 48 309.254 48 296V216C48 202.744 37.254 192 24 192S0 202.744 0 216V296C0 309.254 10.746 320 24 320ZM264 432H184C170.746 432 160 442.744 160 456C160 469.254 170.746 480 184 480H264C277.254 480 288 469.254 288 456C288 442.744 277.254 432 264 432ZM104 432H96C69.49 432 48 410.51 48 384V376C48 362.744 37.254 352 24 352S0 362.744 0 376V384C0 437.02 42.98 480 96 480H104C117.254 480 128 469.254 128 456C128 442.744 117.254 432 104 432ZM424 192C410.746 192 400 202.744 400 216V296C400 309.254 410.746 320 424 320S448 309.254 448 296V216C448 202.744 437.254 192 424 192ZM264 32H184C170.746 32 160 42.744 160 56C160 69.254 170.746 80 184 80H264C277.254 80 288 69.254 288 56C288 42.744 277.254 32 264 32ZM352 32H344C330.746 32 320 42.744 320 56C320 69.254 330.746 80 344 80H352C378.51 80 400 101.49 400 128V136C400 149.254 410.746 160 424 160S448 149.254 448 136V128C448 74.98 405.02 32 352 32ZM424 352C410.746 352 400 362.744 400 376V384C400 410.51 378.51 432 352 432H344C330.746 432 320 442.744 320 456C320 469.254 330.746 480 344 480H352C405.02 480 448 437.02 448 384V376C448 362.744 437.254 352 424 352Z" })
  }
));
SquareDashedRegular.displayName = "SquareDashedRegular";
var SquareDashed_default = SquareDashedRegular;
