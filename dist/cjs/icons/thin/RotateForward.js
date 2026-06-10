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
var RotateForward_exports = {};
__export(RotateForward_exports, {
  default: () => RotateForward_default
});
module.exports = __toCommonJS(RotateForward_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RotateForwardThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496.703 33.906C487.266 30.047 477.047 32.094 469.859 39.25L408.664 100.445L406.297 97.609C318.922 10.266 176.859 10.266 89.484 97.609C2.172 184.938 2.172 327.063 89.484 414.406C133.172 458.062 190.516 479.906 247.891 479.906S362.609 458.062 406.297 414.406C409.422 411.281 409.422 406.219 406.297 403.094C403.203 400 398.141 399.938 394.984 403.094C313.859 484.125 181.922 484.156 100.797 403.094C19.703 321.969 19.703 190.016 100.797 108.922C181.859 27.875 313.797 27.812 394.484 108.375L397.318 111.791L327.141 181.969C319.953 189.141 317.922 199.422 321.797 208.797S334.391 224 344.547 224H487.266C500.859 224 511.891 212.953 511.891 199.375V56.656C511.891 46.516 506.078 37.797 496.703 33.906ZM495.891 199.375C495.891 204.125 492.016 208 487.266 208H344.547C339.203 208 337.109 203.922 336.578 202.688C336.078 201.438 334.672 197.063 338.453 193.281L481.172 50.563C483.172 48.563 485.328 48.016 487.109 48.016C488.703 48.016 489.984 48.453 490.578 48.688C491.828 49.203 495.891 51.312 495.891 56.656V199.375Z" })
  }
));
RotateForwardThin.displayName = "RotateForwardThin";
var RotateForward_default = RotateForwardThin;
