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
var At_exports = {};
__export(At_exports, {
  default: () => At_default
});
module.exports = __toCommonJS(At_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AtSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M207.782 20.731C114.33 39.048 39.093 114.392 20.757 207.841C-6.885 348.719 89.403 474.01 219.834 493.825C238.843 496.713 255.999 481.564 255.999 462.337V461.545C255.999 445.802 244.559 432.798 229.163 430.429C144.818 417.453 79.999 344.297 79.999 256.274C79.999 153.356 168.609 70.764 273.437 80.92C364.975 89.788 431.999 172.171 431.999 264.138L431.999 280.301C431.999 302.389 414.062 320.347 391.999 320.347S351.999 302.389 351.999 280.301V160.164C351.999 151.317 344.828 144.146 335.981 144.146H303.999C296.7 144.146 290.796 149.138 288.874 155.827C264.027 143.674 234.636 139.443 202.817 150.721C164.067 164.455 134.693 199.628 129.096 240.356C119.613 309.363 172.92 368.402 239.999 368.402C266.435 368.402 290.407 358.85 309.566 343.514C333.569 374.813 374.799 392.204 418.971 381.002C465.249 369.265 495.999 325.061 495.999 277.317L495.999 256.274C495.999 107.993 361.162 -9.332 207.782 20.731ZM239.999 304.329C213.532 304.329 191.999 282.771 191.999 256.274S213.532 208.219 239.999 208.219S287.999 229.777 287.999 256.274S266.466 304.329 239.999 304.329Z" })
  }
));
AtSolid.displayName = "AtSolid";
var At_default = AtSolid;
