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
var StreetView_exports = {};
__export(StreetView_exports, {
  default: () => StreetView_default
});
module.exports = __toCommonJS(StreetView_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StreetViewThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 304L204.496 403.969C206.498 419.982 220.111 432 236.25 432H275.752C291.891 432 305.502 419.982 307.504 403.969L320 304C337.674 304 352 289.672 352 272V224C352 188.652 323.346 160 288 160H224C188.654 160 160 188.652 160 224V272C160 289.672 174.326 304 192 304ZM176 224C176 197.533 197.533 176 224 176H288C314.467 176 336 197.533 336 224V272C336 280.822 328.822 288 320 288H305.875L304.123 302.016L291.629 401.984C290.629 409.975 283.803 416 275.752 416H236.25C228.197 416 221.371 409.975 220.373 401.984L206.125 288H192C183.178 288 176 280.822 176 272V224ZM256 128C291.375 128 320 99.375 320 64S291.375 0 256 0S192 28.625 192 64S220.625 128 256 128ZM256 16C282.467 16 304 37.533 304 64S282.467 112 256 112S208 90.467 208 64S229.533 16 256 16ZM365.578 344.281C361.156 343.938 357.172 346.75 356.578 351.156C355.984 355.531 359.047 359.563 363.422 360.156C447.672 371.562 496 395.031 496 424.531C496 471.438 375.266 496 256 496S16 471.438 16 424.531C16 394.938 64.328 371.406 148.578 359.938C152.953 359.344 156.016 355.313 155.422 350.906C154.812 346.531 150.562 343.688 146.422 344.062C79.625 353.188 0 374.531 0 424.531C0 509.531 229.797 512 256 512S512 509.531 512 424.531C512 385 461.359 357.25 365.578 344.281Z" })
  }
));
StreetViewThin.displayName = "StreetViewThin";
var StreetView_default = StreetViewThin;
