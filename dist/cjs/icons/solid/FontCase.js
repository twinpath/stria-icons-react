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
var FontCase_exports = {};
__export(FontCase_exports, {
  default: () => FontCase_default
});
module.exports = __toCommonJS(FontCase_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FontCaseSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M599.999 160C587.757 160 577.195 165.807 569.859 174.467C552.4 165.527 532.925 160 511.999 160C441.421 160 383.999 217.406 383.999 288V352C383.999 422.594 441.421 480 511.999 480C532.925 480 552.4 474.473 569.859 465.533C577.195 474.193 587.757 480 599.999 480C622.093 480 639.999 462.094 639.999 440V200C639.999 177.906 622.093 160 599.999 160ZM559.999 352C559.999 378.469 538.468 400 511.999 400S463.999 378.469 463.999 352V288C463.999 261.531 485.531 240 511.999 240S559.999 261.531 559.999 288V352ZM213.513 58.123C207.716 42.438 192.749 32 175.999 32S144.283 42.438 138.486 58.123L2.492 426.109C-5.165 446.826 5.413 469.857 26.146 477.514C46.818 485.17 69.863 474.545 77.519 453.857L103.339 383.986H248.66L274.48 453.857C280.449 469.982 295.73 479.982 311.994 479.982C316.603 479.982 321.29 479.201 325.853 477.514C346.585 469.857 357.163 446.826 349.507 426.109L213.513 58.123ZM132.904 303.988L175.999 187.369L219.095 303.988H132.904Z" })
  }
));
FontCaseSolid.displayName = "FontCaseSolid";
var FontCase_default = FontCaseSolid;
