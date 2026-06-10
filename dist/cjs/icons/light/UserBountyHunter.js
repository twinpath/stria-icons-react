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
var UserBountyHunter_exports = {};
__export(UserBountyHunter_exports, {
  default: () => UserBountyHunter_default
});
module.exports = __toCommonJS(UserBountyHunter_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserBountyHunterLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 352H128C57.307 352 0 409.307 0 480C0 497.672 14.326 512 32 512H416C433.674 512 448 497.672 448 480C448 409.307 390.693 352 320 352ZM184.727 480L224 439.109L263.273 480H184.727ZM307.617 480L235.531 404.922C229.531 398.641 218.469 398.641 212.469 404.922L140.383 480H32C32 427.064 75.064 384 128 384H320C372.936 384 416 427.064 416 480H307.617ZM89.301 293.91L207.846 320H240.154L358.699 293.91C374.176 290.502 384.869 276.479 383.943 260.803L377.037 143.801C372.752 63.188 305.506 0 224 0C170.416 0 123.42 27.6 96 69.219V32C104.836 32 112 24.836 112 16C112 7.162 104.836 0 96 0H80C71.164 0 64 7.162 64 16V264C64 264 64.289 263.721 64.398 263.615C64.859 278.092 74.787 290.715 89.301 293.91ZM351.82 262.656L282.258 277.967C291.133 231.869 326.279 206.398 347.924 194.898L351.82 262.656ZM345.943 160.465C310.229 175.426 256.617 215.787 249.516 285.174L240 287.268V160H345.916L345.943 160.465ZM224 32C282.369 32 331.066 72.953 342.402 128H105.584C116.859 73.02 165.582 32 224 32ZM102.062 160H208V287.271L198.486 285.184C191.387 215.775 137.748 175.41 102.035 160.455L102.062 160ZM100.004 194.859C121.646 206.344 156.875 231.832 165.748 277.998L96 262.689L100.004 194.859Z" })
  }
));
UserBountyHunterLight.displayName = "UserBountyHunterLight";
var UserBountyHunter_default = UserBountyHunterLight;
