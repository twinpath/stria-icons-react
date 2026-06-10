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
var Ufo_exports = {};
__export(Ufo_exports, {
  default: () => Ufo_default
});
module.exports = __toCommonJS(Ufo_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UfoRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 336C306.746 336 296 346.744 296 360C296 373.254 306.746 384 320 384S344 373.254 344 360C344 346.744 333.254 336 320 336ZM128 296C114.746 296 104 306.744 104 320C104 333.254 114.746 344 128 344S152 333.254 152 320C152 306.744 141.254 296 128 296ZM499.871 212.635C482.104 127.82 408.248 64 320 64S157.896 127.82 140.129 212.635C58.742 233.311 0 269.311 0 320C0 404.031 160.969 448 320 448S640 404.031 640 320C640 269.311 581.258 233.311 499.871 212.635ZM320 112C392.344 112 451.656 170.438 455.469 246.609C372.625 279.969 266.875 279.891 184.094 246.438C186.938 171.812 246.812 112 320 112ZM320 400C153.969 400 48 352.625 48 320C48 302.023 80.314 279.605 136.977 263.064C137.039 263.539 137.057 263.797 137.125 264.312C137.719 273.078 143.094 280.812 151.062 284.469C201.906 307.719 260.312 320 320 320S438.094 307.719 488.938 284.469C496.469 281.014 501.811 271.471 502.918 263.031C559.648 279.574 592 302.012 592 320C592 352.625 486.031 400 320 400ZM512 296C498.746 296 488 306.744 488 320C488 333.254 498.746 344 512 344S536 333.254 536 320C536 306.744 525.254 296 512 296Z" })
  }
));
UfoRegular.displayName = "UfoRegular";
var Ufo_default = UfoRegular;
