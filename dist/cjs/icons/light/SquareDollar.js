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
var SquareDollar_exports = {};
__export(SquareDollar_exports, {
  default: () => SquareDollar_default
});
module.exports = __toCommonJS(SquareDollar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareDollarLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M228.375 240.578L220 238.172C182.688 227.203 173.344 219.078 176.594 200.375C180.344 178.5 210.031 173.063 237.844 177.438C245.469 178.625 254.656 181.141 266.781 185.328C275.156 188.219 284.25 183.781 287.125 175.438C290 167.078 285.594 157.969 277.219 155.078C263.281 150.266 252.344 147.312 242.781 145.812C241.822 145.662 240.949 145.682 240 145.551V112C240 103.156 232.844 96 224 96S208 103.156 208 112V144.707C173.969 148.223 149.977 166.389 145.031 194.938C136.062 246.859 184.812 261.172 211 268.875L219.562 271.344C262.312 283.562 275.031 290.719 271.406 311.625C267.656 333.531 237.969 338.891 210.062 334.547C198.312 332.781 184.344 327.75 172 323.297L165.344 320.922C157 318.016 147.906 322.328 144.906 330.656C141.969 339 146.344 348.141 154.656 351.078L161.156 353.406C174.875 358.359 190.438 363.953 205.219 366.188C206.182 366.338 207.045 366.279 208 366.412V400C208 408.844 215.156 416 224 416S240 408.844 240 400V367.26C274.043 363.74 298.016 345.605 302.938 317.078C312.062 264.5 263.688 250.672 228.375 240.578ZM384 32H64C28.654 32 0 60.656 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.656 419.346 32 384 32ZM416 416C416 433.645 401.645 448 384 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H384C401.645 64 416 78.355 416 96V416Z" })
  }
));
SquareDollarLight.displayName = "SquareDollarLight";
var SquareDollar_default = SquareDollarLight;
