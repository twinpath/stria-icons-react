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
var Diploma_exports = {};
__export(Diploma_exports, {
  default: () => Diploma_default
});
module.exports = __toCommonJS(Diploma_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiplomaThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M552 144H460.867C472.492 132.258 480 115.201 480 96C480 60.719 455.172 32 424.641 32C398.629 32 379.145 37.473 320 136.379C260.855 37.473 241.371 32 215.359 32C184.828 32 160 60.719 160 96C160 115.201 167.508 132.258 179.133 144H88C39.469 144 0 199.625 0 268C0 336.312 39.406 391.906 89.078 391.906H89.188L248 367.92V472C248 474.781 249.438 477.344 251.797 478.812C254.125 480.219 257.078 480.406 259.578 479.156L320 448.938L380.422 479.156C381.547 479.719 382.781 480 384 480C385.469 480 386.922 479.594 388.203 478.812C390.562 477.344 392 474.781 392 472V367.904L552 392C600.531 392 640 336.375 640 268S600.531 144 552 144ZM424.641 48C446.344 48 464 69.531 464 96S446.344 144 424.641 144H334.031C391.453 48 406.891 48 424.641 48ZM176 96C176 69.531 193.656 48 215.359 48C233.109 48 248.547 48 305.969 144H215.359C193.656 144 176 122.469 176 96ZM88 376C48.297 376 16 327.562 16 268S48.297 160 88 160H248V351.762L88 376ZM376 459.062L323.578 432.844C321.328 431.719 318.672 431.719 316.422 432.844L264 459.062V160H376V459.062ZM553.188 376.094L392 351.748V160H552C591.703 160 624 208.438 624 268S591.703 376 553.188 376.094Z" })
  }
));
DiplomaThin.displayName = "DiplomaThin";
var Diploma_default = DiplomaThin;
