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
var SquareB_exports = {};
__export(SquareB_exports, {
  default: () => SquareB_default
});
module.exports = __toCommonJS(SquareB_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareBDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M272 204C272 188.562 259.438 176 244 176H176V232H244C259.438 232 272 219.438 272 204ZM260 280H176V336H260C275.438 336 288 323.438 288 308S275.438 280 260 280ZM384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416V96C448 60.654 419.348 32 384 32ZM260 384H152C138.75 384 128 373.25 128 360V152C128 138.75 138.75 128 152 128H244C285.906 128 320 162.094 320 204C320 220.346 314.699 235.41 305.883 247.82C324.062 261.719 336 283.4 336 308C336 349.906 301.906 384 260 384Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M305.883 247.82C314.699 235.41 320 220.346 320 204C320 162.094 285.906 128 244 128H152C138.75 128 128 138.75 128 152V360C128 373.25 138.75 384 152 384H260C301.906 384 336 349.906 336 308C336 283.4 324.062 261.719 305.883 247.82ZM176 176H244C259.438 176 272 188.562 272 204S259.438 232 244 232H176V176ZM260 336H176V280H260C275.438 280 288 292.562 288 308S275.438 336 260 336Z" })
    ]
  }
));
SquareBDuotone.displayName = "SquareBDuotone";
var SquareB_default = SquareBDuotone;
