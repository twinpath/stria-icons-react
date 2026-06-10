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
var GaugeMin_exports = {};
__export(GaugeMin_exports, {
  default: () => GaugeMin_default
});
module.exports = __toCommonJS(GaugeMin_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GaugeMinThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 352C464 360.836 471.164 368 480 368S496 360.836 496 352C496 343.162 488.836 336 480 336S464 343.162 464 352ZM304 128C304 119.162 296.836 112 288 112S272 119.162 272 128C272 136.836 279.164 144 288 144S304 136.836 304 128ZM416 192C416 200.836 423.164 208 432 208S448 200.836 448 192C448 183.162 440.836 176 432 176S416 183.162 416 192ZM160 192C160 183.162 152.836 176 144 176S128 183.162 128 192C128 200.836 135.164 208 144 208S160 200.836 160 192ZM72.156 342.484C71.312 346.828 74.156 351.016 78.5 351.859L206.109 376.402C202.301 386.24 200 396.832 200 408C200 412.422 203.594 416 208 416S216 412.422 216 408C216 368.297 248.312 336 288 336S360 368.297 360 408C360 412.422 363.594 416 368 416S376 412.422 376 408C376 359.469 336.531 320 288 320C256.566 320 229.141 336.689 213.572 361.543L81.5 336.141C77.156 335.375 72.969 338.156 72.156 342.484ZM0 320C0 375.094 16.25 429.156 46.938 476.359C48.438 478.625 50.938 480 53.656 480H522.344C525.062 480 527.562 478.625 529.062 476.359C559.75 429.156 576 375.094 576 320C576 161.203 446.812 32 288 32S0 161.203 0 320ZM16 320C16 170.016 138.031 48 288 48S560 170.016 560 320C560 370.578 545.469 420.281 517.969 464H58.031C30.531 420.281 16 370.578 16 320Z" })
  }
));
GaugeMinThin.displayName = "GaugeMinThin";
var GaugeMin_default = GaugeMinThin;
