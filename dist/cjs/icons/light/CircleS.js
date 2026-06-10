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
var CircleS_exports = {};
__export(CircleS_exports, {
  default: () => CircleS_default
});
module.exports = __toCommonJS(CircleS_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleSLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M260.156 240.625C209.375 226.969 187.688 218.094 192.781 190.391C193.875 184.437 197.25 175.984 207.156 169.578C220.563 160.906 249.219 153.641 309.313 168.516C318.031 170.609 326.563 165.391 328.688 156.828C330.813 148.25 325.563 139.578 317 137.453C259.844 123.344 217.063 125.062 189.781 142.703C174.563 152.547 164.438 167.437 161.281 184.625C150.312 244.234 209 260 251.844 271.516C302.625 285.172 324.312 294.047 319.219 321.734C317.281 332.281 312.25 339.516 303.406 344.5C280.344 357.422 232.594 353.266 181.688 333.891C173.5 330.797 164.188 334.875 161.063 343.156C157.906 351.406 162.063 360.656 170.313 363.797C185.969 369.75 227.438 383.953 267.25 383.953C285.844 383.953 304.063 380.859 319.094 372.391C336.156 362.797 347.063 347.281 350.719 327.516C361.688 267.906 303 252.141 260.156 240.625ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464Z" })
  }
));
CircleSLight.displayName = "CircleSLight";
var CircleS_default = CircleSLight;
