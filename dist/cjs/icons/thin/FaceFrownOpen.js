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
var FaceFrownOpen_exports = {};
__export(FaceFrownOpen_exports, {
  default: () => FaceFrownOpen_default
});
module.exports = __toCommonJS(FaceFrownOpen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceFrownOpenThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 192C184.844 192 192 199.148 192 208S184.844 224 176 224S160 216.852 160 208S167.156 192 176 192ZM336 224C327.156 224 320 216.852 320 208S327.156 192 336 192S352 199.148 352 208S344.844 224 336 224ZM256 16C123.418 16 16 123.422 16 256S123.418 496 256 496S496 388.578 496 256S388.582 16 256 16ZM256 480C132.484 480 32 379.516 32 256S132.484 32 256 32S480 132.484 480 256S379.516 480 256 480ZM256 304C219 304 160.453 325.562 152.344 371.875C150.891 380.125 153.766 388.375 160.031 393.938C166.359 399.5 174.922 401.438 183.016 398.906C213.703 389.562 240.984 384 256 384S298.297 389.562 328.984 398.906C331.344 399.625 333.734 399.969 336.109 399.969C341.859 399.969 347.469 397.906 351.937 393.969C358.219 388.437 361.109 380.187 359.656 371.875C351.547 325.562 293 304 256 304ZM341.359 381.969C339.25 383.812 336.484 384.437 333.656 383.594H333.641C301.531 373.844 272.5 368 256 368S210.469 373.844 178.359 383.594C175.547 384.406 172.797 383.812 170.641 381.969C168.531 380.094 167.609 377.438 168.094 374.625C174.266 339.469 223.984 320 256 320S337.734 339.469 343.906 374.625C344.594 378.625 342.344 381.094 341.359 381.969Z" })
  }
));
FaceFrownOpenThin.displayName = "FaceFrownOpenThin";
var FaceFrownOpen_default = FaceFrownOpenThin;
