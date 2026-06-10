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
var Angle_exports = {};
__export(Angle_exports, {
  default: () => Angle_default
});
module.exports = __toCommonJS(Angle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AngleThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M440 464H20.937L231.156 43.566C233.125 39.612 231.531 34.815 227.578 32.831C223.609 30.878 218.828 32.487 216.844 36.409L0.844 468.437C-0.391 470.906 -0.266 473.844 1.187 476.219C2.656 478.562 5.234 480 8 480H440C444.422 480 448 476.406 448 472C448 467.593 444.422 464 440 464ZM348.578 423.998C348.953 423.998 349.344 423.967 349.719 423.905C354.094 423.28 357.14 419.248 356.515 414.873C352.64 387.779 345.515 361.184 335.344 335.871C333.687 331.746 329.062 329.839 324.937 331.402C320.844 333.058 318.859 337.715 320.5 341.809C330.187 365.965 336.984 391.31 340.672 417.123C341.25 421.123 344.672 423.998 348.578 423.998ZM213.172 191.773C210.484 195.289 211.172 200.305 214.687 202.976C238.062 220.805 259 241.728 276.89 265.15C278.469 267.213 280.844 268.291 283.25 268.291C284.953 268.291 286.656 267.76 288.109 266.65C291.609 263.963 292.297 258.947 289.609 255.431C270.844 230.884 248.906 208.945 224.375 190.257C220.89 187.601 215.875 188.226 213.172 191.773Z" })
  }
));
AngleThin.displayName = "AngleThin";
var Angle_default = AngleThin;
