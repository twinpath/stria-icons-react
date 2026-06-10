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
var FaceAngry_exports = {};
__export(FaceAngry_exports, {
  default: () => FaceAngry_default
});
module.exports = __toCommonJS(FaceAngry_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceAngryThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 344C226.469 344 198.219 356.641 178.469 378.656C175.531 381.953 175.812 387.016 179.094 389.953C182.406 392.922 187.469 392.656 190.406 389.344C207.094 370.688 231 360 256 360S304.906 370.688 321.594 389.344C323.188 391.109 325.375 392 327.562 392C329.469 392 331.375 391.328 332.906 389.953C336.188 387.016 336.469 381.953 333.531 378.656C313.781 356.641 285.531 344 256 344ZM231.594 210.531C233 206.344 230.719 201.812 226.531 200.406L130.531 168.406C126.406 167.016 121.813 169.297 120.406 173.469C119 177.656 121.281 182.188 125.469 183.594L221.469 215.594C227.201 217.504 230.811 212.859 231.594 210.531ZM381.469 168.406L285.469 200.406C281.281 201.812 279 206.344 280.406 210.531C281.189 212.859 284.799 217.504 290.531 215.594L386.531 183.594C390.719 182.187 393 177.656 391.594 173.469C390.188 169.297 385.688 167 381.469 168.406ZM256 16C123.453 16 16 123.451 16 256S123.453 496 256 496S496 388.549 496 256S388.547 16 256 16ZM256 480C132.484 480 32 379.514 32 256S132.484 32 256 32S480 132.486 480 256S379.516 480 256 480ZM336 224C327.164 224 320 231.162 320 240C320 248.836 327.164 256 336 256S352 248.836 352 240C352 231.162 344.836 224 336 224ZM192 240C192 231.178 184.824 224 176 224S160 231.178 160 240S167.176 256 176 256S192 248.822 192 240Z" })
  }
));
FaceAngryThin.displayName = "FaceAngryThin";
var FaceAngry_default = FaceAngryThin;
