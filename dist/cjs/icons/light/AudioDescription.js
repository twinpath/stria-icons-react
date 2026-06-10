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
var AudioDescription_exports = {};
__export(AudioDescription_exports, {
  default: () => AudioDescription_default
});
module.exports = __toCommonJS(AudioDescription_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AudioDescriptionLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M206.312 168.844C200.875 158 183.125 158 177.688 168.844L97.688 328.844C93.734 336.75 96.938 346.359 104.844 350.312C112.766 354.219 122.344 351.047 126.312 343.156L145.891 304H238.109L257.688 343.156C260.5 348.766 266.141 352 272.016 352C274.422 352 276.859 351.453 279.156 350.312C287.062 346.359 290.266 336.75 286.312 328.844L206.312 168.844ZM161.891 272L192 211.781L222.109 272H161.891ZM384 160H320C311.156 160 304 167.156 304 176V336C304 344.844 311.156 352 320 352H384C436.938 352 480 308.938 480 256S436.938 160 384 160ZM384 320H336V192H384C419.297 192 448 220.703 448 256S419.297 320 384 320ZM512 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H512C547.346 480 576 451.346 576 416V96C576 60.652 547.346 32 512 32ZM544 416C544 433.645 529.645 448 512 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H512C529.645 64 544 78.355 544 96V416Z" })
  }
));
AudioDescriptionLight.displayName = "AudioDescriptionLight";
var AudioDescription_default = AudioDescriptionLight;
