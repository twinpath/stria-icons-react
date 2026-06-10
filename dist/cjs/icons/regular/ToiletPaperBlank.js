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
var ToiletPaperBlank_exports = {};
__export(ToiletPaperBlank_exports, {
  default: () => ToiletPaperBlank_default
});
module.exports = __toCommonJS(ToiletPaperBlank_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ToiletPaperBlankRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M463.995 144C450.745 144 439.994 165.5 439.994 192S450.745 240 463.995 240C477.246 240 487.996 218.5 487.996 192S477.246 144 463.995 144ZM463.995 0H143.981C82.104 0 31.977 86 31.977 192V364.125C31.977 405.25 22.226 426.875 0.85 491C-2.65 501.25 5.1 512 15.976 512H344.865C358.741 512 370.866 503.25 375.241 490.125C386.492 456.625 396.867 426.625 399.367 384H463.995C525.873 384 576 298 576 192C576 86 525.873 0 463.995 0ZM351.99 192V364.125C351.99 405.125 343.99 432.125 333.365 464H60.603C73.103 426.5 79.979 401.75 79.979 364.125V192C79.979 105.375 118.48 48 143.981 48H390.117C366.741 83.25 351.99 134.625 351.99 192ZM463.995 336C438.494 336 399.992 278.625 399.992 192S438.494 48 463.995 48S527.998 105.375 527.998 192S489.496 336 463.995 336Z" })
  }
));
ToiletPaperBlankRegular.displayName = "ToiletPaperBlankRegular";
var ToiletPaperBlank_default = ToiletPaperBlankRegular;
