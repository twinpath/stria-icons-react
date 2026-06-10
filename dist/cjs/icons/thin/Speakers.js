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
var Speakers_exports = {};
__export(Speakers_exports, {
  default: () => Speakers_default
});
module.exports = __toCommonJS(Speakers_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SpeakersThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M592 0H304C277.5 0 256 21.5 256 48V464C256 490.5 277.5 512 304 512H592C618.5 512 640 490.5 640 464V48C640 21.5 618.5 0 592 0ZM624 464C624 481.645 609.645 496 592 496H304C286.355 496 272 481.645 272 464V48C272 30.355 286.355 16 304 16H592C609.645 16 624 30.355 624 48V464ZM448 160C474.5 160 496 138.5 496 112S474.5 64 448 64S400 85.5 400 112S421.5 160 448 160ZM448 80C465.645 80 480 94.355 480 112S465.645 144 448 144S416 129.645 416 112S430.355 80 448 80ZM448 224C386.188 224 336 274.172 336 336S386.188 448 448 448S560 397.828 560 336S509.812 224 448 224ZM448 432C395.064 432 352 388.934 352 336C352 283.064 395.064 240 448 240S544 283.064 544 336C544 388.934 500.936 432 448 432ZM448 288C421.516 288 400 309.504 400 336S421.516 384 448 384S496 362.496 496 336S474.484 288 448 288ZM448 368C430.355 368 416 353.645 416 336S430.355 304 448 304S480 318.355 480 336S465.645 368 448 368ZM176 288C149.516 288 128 309.504 128 336S149.516 384 176 384S224 362.496 224 336S202.484 288 176 288ZM176 368C158.355 368 144 353.645 144 336S158.355 304 176 304S208 318.355 208 336S193.645 368 176 368ZM176 64C149.5 64 128 85.5 128 112S149.5 160 176 160S224 138.5 224 112S202.5 64 176 64ZM176 144C158.355 144 144 129.645 144 112S158.355 80 176 80S208 94.355 208 112S193.645 144 176 144ZM216 0H48C21.49 0 0 21.49 0 48V464C0 490.51 21.49 512 48 512H216C220.418 512 224 508.418 224 504S220.418 496 216 496H48C30.326 496 16 481.672 16 464V48C16 30.326 30.326 16 48 16H216C220.418 16 224 12.418 224 8S220.418 0 216 0ZM219.426 233.133C199.758 224.703 177.479 221.316 153.613 226.369C105.172 236.623 68.01 278.031 64.322 327.408C59.412 393.111 111.348 448 176 448C191.467 448 206.049 444.6 219.424 438.867C222.232 437.664 224 434.824 224 431.768V431.207C224 425.553 218.195 421.967 213.006 424.213C199.324 430.131 184.109 433.072 167.93 431.643C119.305 427.346 80.545 385.891 80.006 337.08C79.416 283.65 122.705 240 176 240C189.172 240 201.611 242.861 212.988 247.779C218.186 250.025 224 246.445 224 240.783V240.229C224 237.174 222.234 234.336 219.426 233.133Z" })
  }
));
SpeakersThin.displayName = "SpeakersThin";
var Speakers_default = SpeakersThin;
