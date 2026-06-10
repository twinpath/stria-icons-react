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
var BracketsCurly_exports = {};
__export(BracketsCurly_exports, {
  default: () => BracketsCurly_default
});
module.exports = __toCommonJS(BracketsCurly_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BracketsCurlyDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M566.625 233.375L521.375 188.125C515.372 182.122 512 173.981 512 165.492V128C512 74.981 469.019 32 416 32H384C366.327 32 352 46.327 352 64V64C352 81.673 366.327 96 384 96H416C433.6 96 448 110.4 448 128V165.5C448 190.952 458.111 215.361 476.108 233.358L498.75 256L476.108 278.642C458.111 296.639 448 321.048 448 346.5V384C448 401.6 433.6 416 416 416H384C366.327 416 352 430.327 352 448V448C352 465.673 366.327 480 384 480H416C469.019 480 512 437.019 512 384V346.5C512 338.016 515.37 329.88 521.369 323.881L566.625 278.625C579.12 266.13 579.12 245.87 566.625 233.375Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M191.997 32H159.997C106.977 32 63.997 74.981 63.997 128V165.5C63.997 173.984 60.626 182.12 54.627 188.119L9.372 233.375C-3.124 245.87 -3.124 266.13 9.372 278.625L54.627 323.881C60.626 329.88 63.997 338.016 63.997 346.5V384C63.997 437.019 106.977 480 159.997 480H191.997C209.67 480 223.997 465.673 223.997 448V448C223.997 430.327 209.67 416 191.997 416H159.997C142.397 416 127.997 401.6 127.997 384V346.5C127.997 321.048 117.886 296.639 99.889 278.642L77.247 256L99.872 233.375C117.88 215.367 127.997 190.943 127.997 165.475V128C127.997 110.4 142.397 96 159.997 96H191.997C209.67 96 223.997 81.673 223.997 64V64C223.997 46.327 209.67 32 191.997 32Z" })
    ]
  }
));
BracketsCurlyDuotone.displayName = "BracketsCurlyDuotone";
var BracketsCurly_default = BracketsCurlyDuotone;
