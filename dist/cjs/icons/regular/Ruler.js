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
var Ruler_exports = {};
__export(Ruler_exports, {
  default: () => Ruler_default
});
module.exports = __toCommonJS(Ruler_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RulerRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 142.141C512 129.509 507.209 116.878 497.627 107.295L404.705 14.373C395.123 4.791 382.49 0 369.859 0C357.227 0 344.596 4.791 335.014 14.373L14.373 335.012C4.791 344.595 0 357.226 0 369.857S4.791 395.12 14.373 404.703L107.297 497.625C116.879 507.207 129.51 512 142.143 512C154.773 512 167.406 507.207 176.988 497.625L497.627 176.986C507.209 167.403 512 154.772 512 142.141ZM143.047 463.684H141.236L48.316 370.764C48.104 370.552 47.998 370.204 47.998 369.856C47.998 369.51 48.104 369.164 48.314 368.953L101.322 315.947L132.688 347.312C135.812 350.438 139.906 352 144 352C153.139 352 160 344.527 160 336C160 331.906 158.438 327.812 155.312 324.688L123.947 293.322L165.322 251.947L196.688 283.312C199.812 286.438 203.906 288 208 288C217.139 288 224 280.527 224 272C224 267.906 222.438 263.812 219.312 260.688L187.947 229.322L229.322 187.947L260.688 219.312C263.812 222.438 267.906 224 272 224C281.139 224 288 216.527 288 208C288 203.906 286.438 199.812 283.312 196.688L251.947 165.322L293.322 123.947L324.688 155.312C327.812 158.438 331.906 160 336 160C345.139 160 352 152.527 352 144C352 139.906 350.438 135.812 347.312 132.688L315.947 101.322L368.953 48.316C369.047 48.221 369.27 48 369.859 48L370.764 48.314L463.684 141.234C463.896 141.447 464.002 141.794 464.002 142.142C464.002 142.488 463.896 142.834 463.686 143.045L143.047 463.684Z " })
  }
));
RulerRegular.displayName = "RulerRegular";
var Ruler_default = RulerRegular;
